function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6SS9qFRTGRK":
        Script1();
        break;
      case "68HWIJJbYNM":
        Script2();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();
var myName  = lmsAPI.GetStudentName();
var array  = myName.split(',');
var newName = array[1];
player.SetVar("newName", newName);
//myName = player.GetVar('myName');
//player.SetVar("newName", newName);
}

function Script2()
{
  var player = GetPlayer();
player.SetVar("A1", "incomplete");
player.SetVar("A2", "incomplete");
player.SetVar("A3", "incomplete");
player.SetVar("B1", "incomplete");
player.SetVar("B2", "incomplete");
player.SetVar("B3", "incomplete");
player.SetVar("C1", "incomplete");
player.SetVar("C2", "incomplete");
player.SetVar("C3", "incomplete");
}

