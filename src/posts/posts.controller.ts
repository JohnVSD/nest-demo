import { Controller, Get, Post, Put, Body, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiExtraModels, ApiProperty } from '@nestjs/swagger';

class CreatePostDto {
  @ApiProperty({ description: '帖子标题' })
  title: string
  @ApiProperty({ description: '帖子详情' })
  content: string
}

@Controller('posts')
  @ApiTags('帖子')
export class PostsController {
  @Get()
  @ApiOperation({ summary: '帖子列表' })
  index() {
    return [
      {
        id: 1,
        title: '123',
        content: '解决解决'
      },
      {
        id: 2,
        title: '123',
        content: '解决解决'
      }
    ]
  }

  @Post()
  @ApiOperation({ summary: '创建帖子' })
  create(@Body() body: CreatePostDto) {
    return body;
  }

  @Get(':id')
  @ApiOperation({ summary: '帖子详情' })
  details() {
    return {
      id: 1,
      content: 'jjkkkjs'
    }
  }

  @Put(':id')
  @ApiOperation({ summary: '编辑帖子' })
  update(@Body() body: CreatePostDto, @Param('id') id: string) {
    return {
      id,
      content: '修改成功'
    }
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除帖子' })
  remove(@Param('id') id: string) {
    return {
      id,
      message: '删除成功'
    }
  }
}
