//feature/addition only
import java.util.Scanner;
public class Main{
	public static void main(String[] args){

		Scanner scanner = new Scanner(System.in);
		System.out.print("Enter the first number: ");
		int num1 = scanner.nextInt();
		System.out.print("Enter the second number: ");
		int num2 = scanner.nextInt();
		int sum = num1 + num2;
		System.out.println("The sum of " + num1 + " and " + num2 + " is: " + sum);


		System.out.print("Enter the first number: ");
		int num3 = scanner.nextInt();
		System.out.print("Enter the second number: ");
		int num4 = scanner.nextInt();
		int difference = num3 - num4;
		System.out.println("The difference  of " + num3 + " and " + num4 + " is: " + difference);
	}
}
