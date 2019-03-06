#NOT FINISHED

import os
import xml.etree.ElementTree as ET

#Iterate through files in working directory of script

for root, dirs, files in os.walk(os.getcwd()):
	for name in files:
		if not name.endswith('.xml'):
			continue;
		filename = os.path.join(root,name);
		root = ET.parse(filename).getroot();

		print("Parsing file:",filename[0:15],"...",filename[-12:])
		for text in root.iter('TEXT'):
			#
			print("{", end ="")
			print("text:snipping fulltext for test purposes",
				end="")
			print(",")
			#print(text.text);

		for child in root.iter('TAGS'):
			count = 0
			for tag in child:
				if count>5: break;
				count+=1;
				print (tag.tag)
				for item in tag.items():
					#print attributes key and value
					print('"'+item[0]+'":"'+item[1]+'",', end='')
					#need to implement final loop 
				print();