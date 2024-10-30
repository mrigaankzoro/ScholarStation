package Recursion;

public class TowerOfHanoi {
	static void TOH(int n, char src, char dst, char temp) {
		if(n<1) {
			return;
		}
		TOH(n-1,src,temp,dst);
		System.out.println("Move "+n+" disk from peg "+src+"to peg "+dst);
		TOH(n-1,temp,dst,src);
		
	}
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		TOH(4,'A','B','C');
	}

}
