var name_guest =[];

function SUBMIT() 
{
    guest_name=document.getElementById(text_input).value;
    name_guest.push(guest_name);
    document.getElementById("name_new").innerHTML=name_guest ;
}
function SHOW()
{
      var remove = name_guest.join(" ");
      document.getElementById("name_showing").innerHTML=remove;
}
function SORT()
{
    name_guest.sort();
    document.getElementById("sorted").innerHTML=name_guest ;
}
  function search()
  {
      var s =document.getElementById("text_input_2").value ;
      var found=0;
      var j ;
      for ( j=0;j<name_guest.length;j++)
      {
          if (s==name_guest[j])
          {found = found=1;}
      }
  }