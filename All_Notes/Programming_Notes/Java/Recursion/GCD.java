package Recursion;

public class GCD {
	
	static int GCDMN(int m, int n) {
		if(m<n)
			return GCDMN(n,m);
		if(m%n==0)
			return n;
		return GCDMN(n,m%n);
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.out.println(GCDMN(10,15));
	}

}
