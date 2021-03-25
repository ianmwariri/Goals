import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  goals:Goal[]=[
      new Goal(1, 'Finish week 1 Content.', 'Angular is Interesting.', new Date(2020,3,14)),
      new Goal(2, 'Watch YT Tutorials', 'Tutorials are quite Exemplary in the service they do to you!', new Date(2019,6,9)),
      new Goal(3, 'Relax over the weekend', 'Ill be with friends', new Date(2021,3,28)),
      new Goal(4, 'Read book', 'Richest man in babylon is my current read.', new Date(2021,3,29)),
      new Goal(5, 'Exercise.', 'Chest & Triceps Day!', new Date(2022,0,14)),
    ];

    toggleDetails(index){
      this.goals[index].showDescription =!this.goals[index].showDescription;
    }

    deleteGoal(isComplete, index){
      if(isComplete){
        let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)
       
       if (toDelete){
         this.goals.splice(index, 1)
       }
      }
    }

    addNewGoal(goal){
      let goalLength = this.goals.length;
      goal.id = goalLength+1;
      goal.completeDate = new Date(goal.completeDate)
      this.goals.push(goal)
    }

  constructor() { }

  ngOnInit(){
  }

}