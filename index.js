<<<<<<< HEAD
var recipes = {
  prop: 1
}

function updateObjectWithKeyAndValue (object,key, value){
  return Object.assign({prop:1}, {prop2:2})
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object.prop2 = 2;
   return object
}
function deleteFromObjectByKey(object, key){
  var newObj = Object.assign({}, recipes)
  delete newObj.prop
  return newObj
}
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object.prop
  return object
}
=======
var recipes = Object({})

function updateObjectWithKeyAndValue (object,key, value){
  
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  
}
function 
>>>>>>> 9ec14a79c07906dc80a31c0b10f4663ef938d4cd
