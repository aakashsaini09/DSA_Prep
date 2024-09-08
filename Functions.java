import java.util.Scanner;

public class Functions {
    public static void main(String[] args) {
//        int ans = sum();
//        System.out.println(ans);
        String value = greatFunction();
        System.out.println("String is: " + value);
        int a = 10;
        int b = 20;
        swap(a, b);
        System.out.println("A and B inside main function: " + a + " " + b);
    }

    static void swap(int a, int b){
        int temp = a;
        a = b;
        b = temp;
        System.out.println("A and B inside swap Function: " + a + " " + b);
    }

    static int sum(){
        Scanner in = new Scanner(System.in);
        System.out.print("enter number 1: ");
        int num1 = in.nextInt();
        System.out.print("Enter number 2: ");
        int num2 = in.nextInt();
        return num1 + num2;
    }


    static  String greatFunction(){
        return "this is string";
    }
}
