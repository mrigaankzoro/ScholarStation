package Recursion;

public class Fibonacci {
	static int Fib(int n) {
		if(n<=1)
			return n;
		return Fib(n-1)+Fib(n-2);
	}
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.out.println(Fib(9));
	}

}
