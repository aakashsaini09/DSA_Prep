import java.util.Scanner;
public class Main{
    public static void main(String[] args){
//        byte b = 42;
//        char c = 'a';
//        short s = 1024;
//        int i = 5000;
//        float f = 44.33f;
//        double d = 0.4332;
//        double result = (f + b) + (i / c) + (d - s);
//        System.out.println(result);


//        Swap number program
        int z, y, temp;
        System.out.println("Enter z and y");
        Scanner sct = new Scanner(System.in);   //User inputs two numbers
        z = sct.nextInt();   //User inputs two numbers
        y = sct.nextInt();
        System.out.println("Before Swapping\nz = "+z+"\ny = "+y);
        temp = z;   //Swapping is done
        z = y;
        y = temp;
        System.out.println("After Swapping\nz = "+z+"\ny = "+y);
       }


}