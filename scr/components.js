Crafty.c('PlayerCharacter', {
  init : function() {this
      .requires('2D, Canvas, Color, Fourway')
      .color('rgb(20, 125, 40)')
      .fourway(4)
      .attr({
        w: 10,
        h: 10,
      	x: 10,
      	y: 10      	
      })
      .bind("Move", function(e){
      	console.log(this.x);
      	if((this.x + this.w) < 0){
      		this.x = 0;
      	}
      });
    }
  }
);

Crafty.c('Aim', {
    init : function() {this
      .requires('2D, Canvas, Color, mouseTracking, Touch, Mouse')
      .color('rgb(255, 255, 255)')
      .attr({
        w: 10,
        h: 10,
        x: 20,
        y: 20
      });
      Crafty.addEvent(this, Crafty.stage.elem, 'mousemove', function(e) {
      	var alert = "";
      	for(var key in e) {
          alert += "key: " + key + " = " + e[key] + " - \n";
        }
      	
      	console.log(alert);
        this.x = Crafty.mousePos.x;
        this.y = Crafty.mousePos.y; 
        this.draw();
      }.bind(this));
      
     
    }
  }
);


