import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateWordDto, UpdateWordDto } from './dto';

@Controller('words')
export class WordsController {

  @Get()
  getAll() {
    return 'get all'
  }

  @Post()
  createItem(@Body() createWord: CreateWordDto) {
    return 'data '
  }

  @Put( ':id')
  updateItem(@Body() updateWord: UpdateWordDto, @Param() id: string) {
    console.log(updateWord);
    return 'Update'
  }

  @Delete(':id')
  removeItem(@Param() id: string) {
    console.log(id);
    return id;
  }
}
