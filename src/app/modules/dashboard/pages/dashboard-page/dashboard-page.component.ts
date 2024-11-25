import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CalendarOptions, EventClickArg } from '@fullcalendar/core';
// import dayGridPlugin from '@fullcalendar/daygrid';
// import interactionPlugin from '@fullcalendar/interaction';

// import { CalendarOptions } from '@fullcalendar/angular'; // Import the CalendarOptions interface
import dayGridPlugin from '@fullcalendar/daygrid'; // Import the dayGrid plugin
import timeGridPlugin from '@fullcalendar/timegrid'; // Import the timeGrid plugin
import listPlugin from '@fullcalendar/list'; // Import the list plugin
import interactionPlugin from '@fullcalendar/interaction'; // Import the interaction plugin


// ?? This is how u can set the events from the expenses or any other data
// this.calendarOptions.events = expenses.map(expense => {
//   return {
//     title : expense.title,
//     date : expense.expenseDate,
//     data : expense
//   }
// });


@Component({
  selector: 'dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css',
})
export class DashboardPageComponent { 

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
    },
    views: {
      dayGridMonth: {
        titleFormat: { year: 'numeric', month: 'long' }
      },
      timeGridWeek: {
        titleFormat: { year: 'numeric', month: 'long', day: 'numeric' }
      },
      timeGridDay: {
        titleFormat: { year: 'numeric', month: 'long', day: 'numeric' }
      },
      listMonth: {
        titleFormat: { year: 'numeric', month: 'long' }
      }
      
    },

    plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin],
    dateClick: (arg) => this.handleDateClick(arg),
    eventClick: (arg) => this.handleEventClick(arg),
    events: [
      {title : 'title 1', date : '2024-11-24', data : {title : 'title 2', date : '2024-11-24', amount : 1000}},
    ]
  };

  handleDateClick(arg : any) {
    alert('date click! ' + arg.dateStr)
  }

  handleEventClick(arg: EventClickArg): void {
    console.log('event click! ', arg.event);
    alert('event click! ' + arg);
  }

}
