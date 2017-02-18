$(document).ready(function() {

	//format of DATA is: kerberos:{eligibility period:{requirement:{complete:bool, comments:string}}}
	var DATA = {"fcicileo":{"Fall 2016":[
				{requirement:"Personal Intergrity", completed:true, comments:""},
				{requirement:"Personal Essay", completed:true, comments:""},
				{requirement:"TBP Social Event #1", completed:true, comments:"Went to Peruvian Restaurant on 09/30/2016"},
				{requirement:"TBP Social Event #2", completed:false, comments:""},
				{requirement:"TBP Service Event", completed:true, comments:"Challah for Hunger on 10/24/2016"},
				{requirement:"Other Service Event", completed:true, comments:"Magazine Beach Bulb Planting on 11/04/2016"},
				{requirement:"Committee Work", completed:false, comments:"On Web Masters Committee"},
				]}, 
			"jesslli":{"Fall 2016":[
				{requirement:"Personal Intergrity", completed:true, comments:""},
				{requirement:"Personal Essay", completed:true, comments:""},
				{requirement:"TBP Social Event #1", completed:true, comments:"Ate food with us"},
				{requirement:"TBP Social Event #2", completed:false, comments:""},
				{requirement:"TBP Service Event", completed:true, comments:"Did service in October"},
				{requirement:"Other Service Event", completed:false, comments:""},
				{requirement:"Committee Work", completed:true, comments:"On Web Masters Committee"},
			]}};

	var currentEligible;
	var currentPeriod;

	var updateTable = function(selectedEligible, selectedPeriod) {
		$("#eligible-admin-view-table").empty();
		var requirements = DATA[selectedEligible][selectedPeriod] ? DATA[selectedEligible][selectedPeriod] : undefined;
		if (requirements) {
			$("#eligible-admin-view-table").append("<tr><th>Complete</th><th>Requirement</th><th>Comments</th></tr>");
			for (var i = 0; i < requirements.length; i++) {
				var requirement = requirements[i].requirement;
				var completed = requirements[i].completed;
				var checkedText = completed ? "checked" : ""
				var comments = requirements[i].comments;
				if (comments) {
					$("#eligible-admin-view-table").append("<tr><td><input type='checkbox' "+checkedText+"></td><td>"+requirement+"</td><td><input type='text' value='"+comments+"'></td></tr>");
				} else {
					$("#eligible-admin-view-table").append("<tr><td><input type='checkbox' "+checkedText+"></td><td>"+requirement+"</td><td><input type='text'></td></tr>");	
				}
			}
			return true;
		} else {
			return false;
		}
	};
	
	$('#admin-select-eligible-button').click(function(){
		var selectedEligible = $("#select-eligible-dropdown option:selected").text();
		currentEligible = selectedEligible;
		var selectedPeriod = $("#select-eligiblility-period-dropdown option:selected").text();
		currentPeriod = selectedPeriod;
		var success = updateTable(selectedEligible, selectedPeriod);
		if (!success) {
			$('#eligibles-admin-table').addClass("eligible-hide");
			$('#eligibles-admin-buttons').addClass("eligible-hide");
			$('#eligibles-status').addClass("eligible-hide");
			$('#eligibles-admin-change-eligible-password').addClass("eligible-hide");
			alert("There is no such eligible on record for that eligibility period.");
		} else {
			$('#eligibles-admin-table').removeClass("eligible-hide");
			$('#eligibles-admin-buttons').removeClass("eligible-hide");
			$('#eligibles-status').removeClass("eligible-hide");
			$('#eligibles-admin-change-eligible-password').removeClass("eligible-hide");
			
		}
	});

	$('#eligibles-admin-save-changes').click(function(){
		//var rows = $("#eligible-admin-view-table").children('tr');
		//don't look at first row, which is just the headers
		//alert("Changes Saved! This Eligible's data has been updated.");
		alert("Save not yet implemented");
	});

	$('#eligibles-admin-discard-changes').click(function(){
		var success = updateTable(currentEligible, currentPeriod);
		if (success) {
			alert("Changes discarded!");
		}
	});
	
});