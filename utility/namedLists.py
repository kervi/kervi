# Copyright (c) 2016, Tim Wentzlau
# Licensed under MIT

""" Named lists are lists that are located by name """

class NamedLists(object):
	def __init__(self):
		self.data={}
		
	def add(self,listName,object):
		if listName in self.data:
			self.data[listName]+=[object]
		else:
			self.data[listName]=[object]

	def getListNames(self):
		result=[]
		for key in self.data:
			result+=[key]
		return result
	
	def getListData(self,listName):
		if listName in self.data:
			return self.data[listName]
		return None
		
	def getListDataWithPartialKey(self,listName):
		items=any(key.startswith(listName) for key in self.data)
		result={}
		for item in items:
			result[item]=self.data[item];
			
		return result	
		