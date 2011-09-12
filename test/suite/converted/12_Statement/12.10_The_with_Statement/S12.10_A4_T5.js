// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Changing property using "eval" statement containing "with" statement
 *
 * @section 12.10
 * @path 12_Statement/12.10_The_with_Statement/S12.10_A4_T5.js
 * @description Changing array property
 * @strict_only
 * @strict_mode_negative
 */

this.p1 = 'a';
var myObj = {
  p1: [1,2,3], 
}
eval("with(myObj){p1=[3,2,1]}");

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if(myObj.p1[2] !== 1){
  $ERROR('#1: myObj.p1[2] === 1. Actual:  myObj.p1[2] ==='+ myObj.p1[2]  );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
if(myObj.p1 === 'a'){
  $ERROR('#2: myObj.p1 !== \'a\'');
}
//
//////////////////////////////////////////////////////////////////////////////
