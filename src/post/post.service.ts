import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { FilesService } from 'src/files/files.service';
import { CreatePostDto } from './dto/create-post.dto';
import { Post } from './post.model';

@Injectable()
export class PostService {

    constructor(@InjectModel(Post) private postRepository: typeof Post,
        private fileService: FilesService
    ) {}

    async create(dto: CreatePostDto, file: any){
        const fileName = await this.fileService.createFile(file);
        const post = await this.postRepository.create({...dto, image: fileName})
        return post;
    }
}
