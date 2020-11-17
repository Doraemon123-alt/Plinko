class Plinko
{


constructor(x,y,r)
{


      var options = {
          isStatic: true,
          restitution:0,
          friction:1,
          density:3
          
      }

this.x=x
this.y=y
this.r=r


     
        
        this.body = Bodies.circle(this.x,this.y,this.r, options);
        World.add(world, this.body);
      
      }

      display()
    {   var paperpos =this.body.position;
        push();
        translate(paperpos.x, paperpos.y);
        
        ellipse(this.body.position.x,this.body.position.y,this.r,this.r);
        pop();
    }
  }
