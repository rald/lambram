class Turtle {
	constructor(c,x,y,h,color) {
		this.c=c;
		this.x=x;
		this.y=y;
		this.h=h;
		this.color=color;
		this.pendown=true;
	}
	
	move(d) {
		var nx=d*cos(d2r*this.h)+this.x;
		var ny=d*sin(d2r*this.h)+this.y;
		if(this.pendown) line(this.c,this.x,this.y,nx,ny,this.color);
		this.x=nx;
		this.y=ny;
	}
	
	turn(a) {
		this.h+=a;
	}
	
	jump(x,y) {
		this.x=x;
		this.y=y;
	}
	
	jump_rel(x,y) {
		this.x+=x;
		this.y+=y;
	}
	
	face(a) {
		this.h=a;
	}
}

export default Turtle;
