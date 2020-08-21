class Paper{
    constructor(x,y,r){
     var options={
         stiffness=0.04,
         isStatic=false,
         friction=0.3
     }
    
     this.paper=Body.circle(x,y,r);
     this.paper.x=x;
     this.paper.y=y;
     this.paper.r=r;
    }
    display(){
        var pos=this.paper.position;
        rectMode(CENTER);
        push();
        translate(pos.x,pos,y);
        ellipse(x,y,r);
    }
}