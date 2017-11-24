import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import {filter, map, flatMap} from 'rxjs/operators'


@Component({
    selector: 'test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
    ziv: string;
    url: string = "http://130.211.153.28:9000/todos"

    constructor(private http: HttpClient) {
        this.getData().subscribe(res => console.log(res))

    }

    getData() {
        return this.http.get(this.url)
            .pipe(
                flatMap((x: any) => x),
                map((x: any) => {
                    return ('ziv say: ' + x.title)
                })
            )


    }

    ngOnInit() {
        
    }

}
