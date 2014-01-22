function ran_int(max){
	return Math.floor(Math.random() * (max + 1));
}

function random_color(){
	return 'rgb(' + ran_int(255) + ', ' + ran_int(255) + ', ' + ran_int(255) + ')';
}

Game = {
	start: function(){
		
		
		Crafty.init(800, 400);
		Crafty.background('rgb(10, 10, 10)');		
	    //Crafty.timer.steptype("fixed", 1);

	    Crafty.e('PlayerCharacter');
	    Crafty.e('Aim');
	   
        Crafty.bind('EnterFrame', function(e) {
	    	console.log("chau");
        });
	     
	    

	}
};
