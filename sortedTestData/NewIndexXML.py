
#Elasticsearch XML indexer

import os
import xml.etree.ElementTree as ET
import pycurl
import json
import csv

try:
    from io import BytesIO
except ImportError:
    from StringIO import StringIO as BytesIO


INDEX	= 'main' #ES index name
TYPE	= 'xml'
URI		= 'http://localhost:9200'

Q = "";
c = pycurl.Curl();

#Sets working directory of script to location of script
#allow python script to be executed from any working directory
os.chdir(os.path.dirname(os.path.realpath(__file__)))

foundFiles = set();		#files found
indexedFiles = set();	#files indexed in csv
modifiedFiles = set();	#files with no intersection
unchangedFiles = set()	#file that havn't changed

delimiter = ','

#if index exists read file entries and store in set indexedFiles
try:
	index = open('index.csv','rt');
	reader = csv.reader(index,delimiter=',')

	for row in reader:
		indexedFiles.add(delimiter.join(row));
except:
	index = open('index.csv','wt');


#iterate through files in working directory and sub-directories of script location
#addes all files found to set of foundFiles
for r, dirs, files in os.walk(os.getcwd()):
	for name in files:
		if not name.endswith('.xml'):
			continue;
		Q = "";
		file = []
		file.append(os.path.join(r,name));
		stat = os.stat(file[0])
		file.append(str(stat.st_mtime));
		foundFiles.add(delimiter.join(file));



#make a list of files where an index pattern dosn't match the found file.
#will also add new files to list
modifiedFiles = foundFiles  -  indexedFiles;
unchangedFiles = foundFiles & indexedFiles;

for item in modifiedFiles:
	filename = item.split(',',1)[0];
	name = os.path.basename(filename);
	if not filename.endswith('.xml'):
		continue;
	Q = "";

	#get path to root of current file
	root = ET.parse(filename).getroot();

	#set pyurl get command eg "http://localhost:9200/xml/filename"
	c.setopt(c.URL, URI+"/"+INDEX+"/"+TYPE+"/"+name);
	c.setopt(c.HTTPHEADER, ["Content-Type: application/json"])
	c.setopt(c.UPLOAD, 1)
	for text in root.iter('TEXT'):

		#Fix dirty XML data.
		escaped = text.text.translate(str.maketrans({
			"\n": r"\\n",
			"\t": r"\\t",
			"'": r"\\'",
			'"': r'\"'
			}))


		Q+=('{"text":"'+escaped+'","tags":[{\n');

	for child in root.iter('TAGS'):
		for tag in child:
			Q+=('"tag":"'+(tag.tag)+'",')
			for item in tag.items():
				#print attributes key and value
				Q+=('"'+item[0]+'":"'+item[1]+'",')
			#cut trailing comma
			Q=Q[:-1];
			Q+=("\n},\n{\n");
		#cut trailing brace
		Q=Q[:-5];
	#add final closing backets for query
	Q+=('}]}');
	buffer = BytesIO(Q.encode('utf-8'));
	c.setopt(c.READDATA, buffer);
	c.perform();
c.close()


#After succesful indexing write new index file
index = open('index.csv','w');
writer = csv.writer(index)
for entry in modifiedFiles|unchangedFiles:
	col = entry.split(",")
	writer.writerows([col])
