function areaOfTriangle(obj){
  let a=1*obj.st1.value;
  let b=1*obj.st2.value;
  let c=1*obj.st3.value;
  let p=(a+b+c)/2;
  let s=Math.sqrt(p*(p-a)*(p-b)*(p-c));
  s=s.toFixed(2);
  obj.res.value=s;
}