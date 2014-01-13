
Crafty.c('PlayerCharacter', {
  init : function() {
      this.requires('2D, Canvas, Color, Fourway');
      this.color('rgb(20, 125, 40)');
      this.fourway(4);
      this.attr({
        w: 10,
        h: 10,
      	x: 10,
      	y: 10
      });
    }
  }
); 

Crafty.c('Aim', {
    init : function() {
      this.requires('2D, Canvas, Color, mouseTracking, Touch, Mouse');
      this.color('rgb(255, 255, 255)');
      this.attr({
        w: 10,
        h: 10,
        x: 20,
        y: 20
      	//x: function(){alert('set'); return Crafty.mousePos.x;},
      	//y: function(){return Crafty.mousePos.y;}
      });
      
      Crafty.addEvent(this, Crafty.stage.elem, 'mousemove', function(e) {
      	this.x = Crafty.mousePos.x;
        this.y = Crafty.mousePos.y; 
      });
    }
  }
);


