package Recursion;

public class AllPermutations {
	public static void swap(int[] arr, int i,int j) {
		int temp=arr[i];
		arr[i]=arr[j];
		arr[j]=temp;
	}
	public static void print(int[] arr,int length) {
		for(int i=0;i<length;i++) {
			System.out.print(arr[i]+" ");
		}
	}
	
	static void permutation(int arr[],int i,int length) {
		if(i==length) {
			print(arr,length);
			System.out.println();
			return;
		}
		for(int j=i;j<length;j++) {
			swap(arr,i,j);
			permutation(arr,i+1,length);
			swap(arr,i,j);
		}
	}
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int arr[]= {0,1,2};
		permutation(arr,0,3);
		
	}

}
