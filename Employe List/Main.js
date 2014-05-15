const $inpElements = [];

const INP_LABELS_NAMES =
[
	"First Name:",
	"Last Name:",
	"Contry:",
	"City:",
	"Province:",
	"Adress:"
];
$(document).ready(function()
{
	$inpElements[0] = $(".firstNameInp");
	$inpElements[1] = $(".lastNameInp");
	$inpElements[2] = $(".countryInp");
	$inpElements[3] = $(".cityInp");
	$inpElements[4] = $(".provinceInp");
	$inpElements[5] = $(".adressInp");
});


$(".submitButton").click(function()
{
	registerUser();
	clearInpFields();
});

function clearInpFields()
{

	for (var i = 0; i < $inpElements.length; i++)
	{
		if ($inpElements[i].is("select") == false) 
		{
			$inpElements[i].val("");
		}

		else
		{
		}
	};
}

function registerUser()
{
	$listElement = $("<fieldset class='listElement'></fieldset>");
	var $listElementFull = $("<div class='listElementFull'></div>");

	$listElement.append("<label class='titleLabel'>" + $inpElements[0].val() + " " + $inpElements[1].val() + "</label>");

	for (var i = 0; i < $inpElements.length; i++) 
	{
		var $tmp = $("<label class='listElementLabel'>" + INP_LABELS_NAMES[i] + " " + $inpElements[i].val() + "</label> ");
		
		//make sure that it is space betwen every second element
		if (i % 2 == 0) {$listElementFull.append("<br/>")};

		$tmp.appendTo($listElementFull);
	};

	$listElementFull.appendTo($listElement);

	//create edit area
	var $listElementEditArea = "<div class='listElementEditArea'>" + $("#registerField").html() + "</div>";
	$listElement.append($listElementEditArea);

	//append buttons
	var $buttonDiv = $("<div class='listElementButtnDiv'> <button class='buttnRemove'>Remove</button><button class='buttnFull'>Full</button><button class='buttnEdit'>Edit</button></div>");
	$listElement.append($buttonDiv);

	//lastly append everything in the fiealdset
	$listElement.appendTo($("#registredWorkersField"));
}

$( "#registredWorkersField" ).on( "click", ".buttnFull", function()
{
	//make this jquery object a variable to make it more clearer and
	//easier to manipulate
	var $listElement = $(this).parent().parent();

	if ($listElement.children(".listElementFull").css("display") == "none")
	{
		$listElement.children(".listElementFull").css("display", " inline");
	}
	else
	{
		$listElement.children(".listElementFull").css("display", " none");
	}
} );

$( "#registredWorkersField" ).on( "click", ".buttnRemove", function()
{
	$(this).parent().parent().fadeOut();
});

$("#registredWorkersField").on("click", ".buttnEdit", function()
{
	//make this jquery object a variable to make it more clearer and
	//easier to manipulate
	var $listElement = $(this).parent().parent();
	//put default values in the edit inputs
	/*$listElement.find("label.0").val($listElement.find(".firstNameInp").html().split()[1]);
	$listElement.find("label.1").val($listElement.find(".lastNameInp").html().split()[1]);
	$listElement.find("label.2").val($listElement.find(".countryInp").html().split()[1]);
	$listElement.find("label.3").val($listElement.find(".cityInp").html().split()[1]);
	$listElement.find("label.4").val($listElement.find(".provinceInp").html().split()[1]);
	$listElement.find("label.5").val($listElement.find(".adressInp").html().split()[1]);*/

	if ($listElement.children(".listElementEditArea").css("display") == "none")
	{
		$listElement.children(".listElementEditArea").css("display", " inline");
	}
	else
	{
		$listElement.children(".listElementEditArea").css("display", " none");
	}
});

$("#registredWorkersField").on("click", ".submitButton", function()
{
	var $tmpFinder = $(this).parent().parent().children(".listElementEditArea");
	var $tmpListElementFull = $(this).parent().parent().children(".listElementFull");
	var $edElements = [];

	$edElements[0] = $tmpFinder.children(".firstNameInp");
	$edElements[1] = $tmpFinder.children(".lastNameInp");
	$edElements[2] = $tmpFinder.children(".countryInp");
	$edElements[3] = $tmpFinder.children(".cityInp");
	$edElements[4] = $tmpFinder.children(".provinceInp");
	$edElements[5] = $tmpFinder.children(".adressInp");

	//change the name on the label
	var $tmpLabel = $(this).parent().parent().children(".titleLabel");
	$tmpLabel.empty();
	$tmpLabel.html("<label>" + $edElements[0].val() + " " + $edElements[1].val() + "</label>");
	
	$tmpListElementFull.empty();
	for (var i = 0; i < $edElements.length; i++) 
	{
		var $tmp = $("<label class='" + i + "'>" + INP_LABELS_NAMES[i] + " " + $edElements[i].val() + "</label> ");
		
		//make sure that it is space betwen every second element
		if (i % 2 == 0) {$tmpListElementFull.append("<br/>")};


		$tmp.appendTo($tmpListElementFull);
	}
});

/*<legend>Registred Workers</legend>		
		<fieldset class="listElement">
			<label>Lucas Källberg</label>
			<div class="listElementFull">
				<label id="firstNameLb" class="listElementLabel">First Name: Lucas</label> 
				<label id="lastNameLb" class="listElementLabel">Last Name: Källberg</label><br>

				<label id="countryLb" class="listElementLabel">Country: Sweden</label>
				<label id="cityLb" class="listElementLabel">City: Gothenburg</label><br>

				<label id="provinceLb" class="listElementLabel">Province: Härlanda</label>
				<label id="adressLb" class="listElementLabel">Adress: småstugev. 87</label><br>
			</div>
		</fieldset>*/