/*Write a program in java that takes the matrix of 3*3 and allows the user to enter
  the number like 0 or 1. Make sure if user wants to start first they will fill the 
  random position on matrix with 0 and the next turn would be taken randomly by computer
  to fill the spot:
a. No Spot should overlap
b. Make sure to return (-1) if the matrix if full
*/

package tic_tac_toe;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Random;
import java.util.Scanner;

public class Cross_zero {
	
	static int[][] matrix = new int[3][3];
	static Scanner sc=new Scanner(System.in);

	
	public static int getUniqueNo()  {
		ArrayList<Integer> list = new ArrayList<Integer>();
		ArrayList<Integer> list1 = new ArrayList<Integer>();
        for (int i=1; i<10; i++) {
            list.add(i);
        }
        Collections.shuffle(list);
        
		return list.get(0);
	}
	
	public static void userInput() {
		int flag=0;
		while(flag==0) {
			System.out.println("enter the position to be filled");
			int position=sc.nextInt();
			switch(position) {
			case 1:
				if(matrix[0][0]==0) {
				matrix[0][0]=1;
				flag=1;
				}
				else {
				System.out.println("position already filled please choose other position");
				}
				break;
			
			case 2:
				if(matrix[0][1]==0) {
				matrix[0][1]=1;
				flag=1;
				}
				else {
				System.out.println("position already filled please choose other position");
				}
				break;
			case 3:
				if(matrix[0][2]==0) {
				matrix[0][2]=1;
				flag=1;
				}
				else {
				System.out.println("position already filled please choose other position");
				}
				break;
			case 4:
				if(matrix[1][0]==0) {
				matrix[1][0]=1;
				flag=1;
				}
				else {
				System.out.println("position already filled please choose other position");
				}
				break;
			case 5:
				if(matrix[1][1]==0) {
				matrix[1][1]=1;
				flag=1;
				}
				else {
				System.out.println("position already filled please choose other position");
				}
				break;
			case 6:
				if(matrix[1][2]==0) {
				matrix[1][2]=1;
				flag=1;
				}
				else {
				System.out.println("position already filled please choose other position");
				}
				break;
			case 7:
				if(matrix[2][0]==0) {
				matrix[2][0]=1;
				flag=1;
				}
				else {
				System.out.println("position already filled please choose other position");
				}
				break;
			case 8:
				if(matrix[2][1]==0) {
				matrix[2][1]=1;
				flag=1;
				}
				else {
				System.out.println("position already filled please choose other position");
				}
				break;
			case 9:
				if(matrix[2][2]==0) {
				matrix[2][2]=1;
				flag=1;
				}
				else {
				System.out.println("position already filled please choose other position");
				}
				break;	
				
			default:{
				int check=isFull();
				if(check==-1) {
					flag=1;
				}
			}
			}
		}
		
	}
	
	public static void machineInput() {
		int flag=0;
		while(flag==0) {
			int position=getUniqueNo();
//			System.out.println(position);
			switch(position) {
			case 1:
				if(matrix[0][0]==0) {
				matrix[0][0]=2;
				flag=1;
				}
				else {
				continue;
				}
				break;
			
			case 2:
				if(matrix[0][1]==0) {
				matrix[0][1]=2;
				flag=1;
				}
				else {
					continue;
				}
				break;
			case 3:
				if(matrix[0][2]==0) {
				matrix[0][2]=2;
				flag=1;
				}
				else {
					continue;
				}
				break;
			case 4:
				if(matrix[1][0]==0) {
				matrix[1][0]=2;
				flag=1;
				}
				else {
					continue;
				}
				break;
			case 5:
				if(matrix[1][1]==0) {
				matrix[1][1]=2;
				flag=1;
				}
				else {
					continue;
				}
				break;
			case 6:
				if(matrix[1][2]==0) {
				matrix[1][2]=2;
				flag=1;
				}
				else {
					continue;
				}
				break;
			case 7:
				if(matrix[2][0]==0) {
				matrix[2][0]=2;
				flag=1;
				}
				else {
					continue;
				}
				break;
			case 8:
				if(matrix[2][1]==0) {
				matrix[2][1]=2;
				flag=1;
				}
				else {
					continue;
				}
				break;
			case 9:
				if(matrix[2][2]==0) {
				matrix[2][2]=2;
				flag=1;
				}
				else {
					continue;
				}
				break;	
			default:{
				int check=isFull();
				if(check==-1) {
					flag=1;
				}
			}
			}
		}
		
	}
	
	public static int isFull() {
		if(matrix[0][0]!=0 && matrix[0][1]!=0 && matrix[0][2]!=0 
				&& matrix[1][0]!=0 && matrix[1][1]!=0 && matrix[1][2]!=0 
				&& matrix[2][0]!=0 && matrix[2][1]!=0 && matrix[2][2]!=0) {
			System.out.println("matrix is full");
			System.out.println(-1);
		}
		return -1;
	}
	
	public static void main(String [] args) {
		Cross_zero cr=new Cross_zero();
		int pos;
		System.out.println("1|2|3\n4|5|6\n7|8|9");
		System.out.println("type yes if you want to start first else press any key and enter");
		String user=sc.next();
		if(user=="yes") {
			for(int i=0;i<5;i++) {
					cr.userInput();
					cr.machineInput();
			}
		}
		else {
			for(int i=0;i<5;i++) {
					cr.machineInput();
					cr.userInput();
			}
		}
		System.out.println(matrix[0][0]+" "+matrix[0][1]+" "+matrix[0][2]);
		System.out.println(matrix[1][0]+" "+matrix[1][1]+" "+matrix[1][2]);
		System.out.println(matrix[2][0]+" "+matrix[2][1]+" "+matrix[2][2]);
		
	}
}

