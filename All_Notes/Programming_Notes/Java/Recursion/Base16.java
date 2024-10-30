package Recursion;

public class Base16 {
	static void printInt(int n) {
		String Conversion="0123456789ABCDEF";
		int base=16;
		int index=n%base;
		n=n/base;
		if(n!=0)
			printInt(n);
		System.out.print(Conversion.charAt(index));
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		printInt(540);
	}

}
