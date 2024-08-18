import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-todo-tasks',
  templateUrl: './todo-tasks.component.html',
  styleUrl: './todo-tasks.component.css',
})
export class TodoTasksComponent implements OnInit {

  arr = new Array(10).fill(1).map(i => i = Math.floor(Math.random() * 1000))
  arr2 = [1, 2, 3, 4, 5, 6, 7]
  indx = ['aaa', 'bbb', 'ccc']
  names = ['AAA', 'BBB', 'CCC']



  ngOnInit() {
    const arr3 = [1, 2, 3, 4, 5, 6, 7]
    const newArr = this.arr2.reduce((acc: number, red: number) => {
      return acc + red
    }, 0)

    const testArr = (arr: any) => arr.reduce((acc: any, red: any, i: any) => {
      // console.log({...acc})
      console.log({[i]: red})
      return {
        ...acc,
        [i]: red
      }
    }, 0)

    // testArr(this.names)
    // console.log(this.arr)
    // console.log(testArr(this.names))
  }

}
