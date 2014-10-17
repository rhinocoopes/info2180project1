{"changed":true,"filter":false,"title":"script.js","tooltip":"/script.js","value":"//Starting of the address book JavaScript\n\nvar bob = {\n    firstName: \"Bob\",\n    lastName: \"Jones\",\n    phoneNumber: \"(650) 777-7777\",\n    email: \"bob.jones@example.com\"\n};\n\nvar mary = {\n    firstName: \"Mary\",\n    lastName: \"Johnson\",\n    phoneNumber: \"(650) 888-8888\",\n    email: \"mary.johnson@example.com\"\n};\n\nvar contacts = [bob, mary];\n\nfunction printPerson(person) {\n    console.log(person.firstName + \" \" + person.lastName);\n    /*document.write(\"<html><body> Name: \"+person.firstName + \" \" + person.lastName+ \"</body></html>\");*/\n    alert(person.firstName + \" \" + person.lastName);\n};\n\nfunction list() {\n\tvar contactsLength = contacts.length;\n\tfor (var i = 0; i < contactsLength; i++) {\n\t\tprintPerson(contacts[i]);\n\t}\n};\n\n/*Create a search function\nthen call it passing \"Jones\"*/\n\nvar search = function (lastName){\n    var contactsLength = contacts.length;\n\tfor (var i = 0; i < contactsLength; i++) {\n\t\tif(contacts[i].lastName===lastName){\n\t\t    printPerson(contacts[i]);\n\t\t}\n\t}\n};\nvar add= function(firstName,lastName,email,phoneNumber){\n    contacts[contacts.length]={\n    firstName: firstName,\n    lastName: lastName,\n    email: email,\n    phoneNumber: phoneNumber,\n    };\n    \n} ;\nadd(\"Stefan\",\"Cooper\",\"nasdnas@nasdasd\",\"925-jerk\");\n//list();\n//search(\"Jones\")\n\nfunction gaza(){\n   alert(\"gaza!!\");\n};\n\n\n//Starting of the cash register JavaScript\n\nvar cashRegister = {\ntotal:0,\nlastTransactionAmount:0,\n//Dont forget to add your property\nadd: function(itemCost) {\nthis.total += itemCost;\nlastTransactionAmount=itemCost;\n},\nscan: function(item,quantity) {\nswitch (item) {\ncase \"eggs\": this.add(0.98 * quantity); break;\ncase \"milk\": this.add(1.23 * quantity); break;\ncase \"magazine\": this.add(4.99 * quantity); break;\ncase \"chocolate\": this.add(0.45 * quantity); break;\n}\nreturn true;\n},\n//Add the voidLastTransaction Method here\nvoidLastTransaction: function(){\nthis.total-=this.lastTransactionAmount;\n}\n\n};\n\ncashRegister.scan('eggs',300000);\ncashRegister.scan('milk',10);\ncashRegister.scan('magazine',1234);\ncashRegister.scan('chocolate',4321);\n\n//Void the last transaction and then add 3 instead\ncashRegister.voidLastTransaction;\ncashRegister.scan('chocolate',3);\n\n//Show the total bill\nconsole.log('Your bill is '+cashRegister.total);","undoManager":{"mark":0,"position":6,"stack":[[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":0},"end":{"row":0,"column":41}},"text":"//Starting of the address book JavaScript"},{"action":"insertText","range":{"start":{"row":0,"column":41},"end":{"row":1,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":1,"column":0},"end":{"row":96,"column":0}},"lines":["","var bob = {","    firstName: \"Bob\",","    lastName: \"Jones\",","    phoneNumber: \"(650) 777-7777\",","    email: \"bob.jones@example.com\"","};","","var mary = {","    firstName: \"Mary\",","    lastName: \"Johnson\",","    phoneNumber: \"(650) 888-8888\",","    email: \"mary.johnson@example.com\"","};","","var contacts = [bob, mary];","","function printPerson(person) {","    console.log(person.firstName + \" \" + person.lastName);","    /*document.write(\"<html><body> Name: \"+person.firstName + \" \" + person.lastName+ \"</body></html>\");*/","    alert(person.firstName + \" \" + person.lastName);","};","","function list() {","\tvar contactsLength = contacts.length;","\tfor (var i = 0; i < contactsLength; i++) {","\t\tprintPerson(contacts[i]);","\t}","};","","/*Create a search function","then call it passing \"Jones\"*/","","var search = function (lastName){","    var contactsLength = contacts.length;","\tfor (var i = 0; i < contactsLength; i++) {","\t\tif(contacts[i].lastName===lastName){","\t\t    printPerson(contacts[i]);","\t\t}","\t}","};","var add= function(firstName,lastName,email,phoneNumber){","    contacts[contacts.length]={","    firstName: firstName,","    lastName: lastName,","    email: email,","    phoneNumber: phoneNumber,","    };","    ","} ;","add(\"Stefan\",\"Cooper\",\"nasdnas@nasdasd\",\"925-jerk\");","//list();","//search(\"Jones\")","","function gaza(){","   alert(\"gaza!!\");","};","","","//Starting of the cash register JavaScript","","var cashRegister = {","total:0,","lastTransactionAmount:0,","//Dont forget to add your property","add: function(itemCost) {","this.total += itemCost;","lastTransactionAmount=itemCost;","},","scan: function(item,quantity) {","switch (item) {","case \"eggs\": this.add(0.98 * quantity); break;","case \"milk\": this.add(1.23 * quantity); break;","case \"magazine\": this.add(4.99 * quantity); break;","case \"chocolate\": this.add(0.45 * quantity); break;","}","return true;","},","//Add the voidLastTransaction Method here","voidLastTransaction: function(){","this.total-=this.lastTransactionAmount;","}","","};","","cashRegister.scan('eggs',300000);","cashRegister.scan('milk',10);","cashRegister.scan('magazine',1234);","cashRegister.scan('chocolate',4321);","","//Void the last transaction and then add 3 instead","cashRegister.voidLastTransaction;","cashRegister.scan('chocolate',3);","","//Show the total bill"]},{"action":"insertText","range":{"start":{"row":96,"column":0},"end":{"row":96,"column":48}},"text":"console.log('Your bill is '+cashRegister.total);"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":96,"column":48},"end":{"row":96,"column":49}},"text":"g"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":96,"column":49},"end":{"row":96,"column":50}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":96,"column":50},"end":{"row":96,"column":51}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":96,"column":50},"end":{"row":96,"column":51}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":96,"column":49},"end":{"row":96,"column":50}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":96,"column":48},"end":{"row":96,"column":49}},"text":"g"}]}]]},"ace":{"folds":[],"scrolltop":908,"scrollleft":0,"selection":{"start":{"row":96,"column":48},"end":{"row":96,"column":48},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":63,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1413576973387}