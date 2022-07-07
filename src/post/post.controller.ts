import { Body, Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { CreatePostDto } from './dto/create-post.dto';
import { PostService } from './post.service';

@Controller('post')
@ApiTags('files')
export class PostController {

    constructor(private postService: PostService) { }

    @Post()
    @UseInterceptors(FileInterceptor('image'))
    @ApiConsumes('multipart/form-data')
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                image: { 
                    type: 'string',
                    format: 'binary',
                },
            },
        },
    })
    createPost(@Body() dto: CreatePostDto,
        @UploadedFile() image: Express.Multer.File) {

        console.log(image);

        return this.postService.create(dto, image);
    }
}
