import {  BehaviorSubject, Observable } from 'rxjs';

export class FileBase{
    public name: string;
    public path: string;
    public isFile = true;
}

export class File extends FileBase{
    public size: number;
}

export class Directory extends FileBase{
    public files$: BehaviorSubject<FileBase[]> = new BehaviorSubject([]);

    constructor(path: string) {
        super();
        this.path = path;
    }

    public updateFiles(files) {
        let result = []
        for(let file of files) {
            if (file.is_file) {
                const fileEntry = new File();
                fileEntry.name = file.name;
                const p = this.path !== '/' ? this.path : '';
                fileEntry.path = p + '/' + file.name;
                result.push(fileEntry);
            } else {
                const p = this.path !== '/' ? this.path : '';
                const directory = new Directory(p + '/' + file.name);
                directory.name = file.name;
                directory.isFile = false;
                result.push(directory);
            }
        }
        this.files$.next(result);
    }
}

