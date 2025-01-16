"use strict";

var teacher = "sanket sing";

function fun() {
    var teacher = "anurag";
    content = "ramu";
    console.log(teacher);
}

function gun() {
    var student = "me";
    console.log("hello ", student);
}

//console.log(teacher, content);   // No Auto Global scope promotion

fun();
gun();

console.log(teacher, content); //Auto Global scope (Promotion)