// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Check Throw Statement for automatic semicolon insertion
 *
 * @path 07_Lexical_Conventions/7.9_Automatic_Semicolon_Insertion/S7.9_A4.js
 * @description Try use Throw \n Expression construction
 * @negative
 */

//CHECK#1
try {
  throw 
  1;
} catch(e) {  
}  
$ERROR('#1: Check throw statement for automatic semicolon insertion');
