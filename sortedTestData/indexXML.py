
#Elasticsearch XML indexer

import os
import xml.etree.ElementTree as ET
import pycurl
import json

try:
    from io import BytesIO
except ImportError:
    from StringIO import StringIO as BytesIO


INDEX	= 'main' #ES index name
TYPE	= 'xml'
URI		= 'http://localhost:9200'

Q = "";
c = pycurl.Curl();
#iterate through files in working directory and sub-directories of script location
for r, dirs, files in os.walk(os.getcwd()):
	for name in files:
		if not name.endswith('.xml'):
			continue;
		Q = "";
		filename = os.path.join(r,name);

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