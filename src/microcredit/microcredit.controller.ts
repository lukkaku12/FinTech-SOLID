import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MicrocreditService } from './microcredit.service';
import { CreateMicrocreditDto } from './dto/create-microcredit.dto';
import { UpdateMicrocreditDto } from './dto/update-microcredit.dto';

@Controller('microcredit')
export class MicrocreditController {
  constructor(private readonly microcreditService: MicrocreditService) {}

  @Post()
  create(@Body() createMicrocreditDto: CreateMicrocreditDto) {
    return this.microcreditService.create(createMicrocreditDto);
  }

  @Get()
  findAll() {
    return this.microcreditService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.microcreditService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMicrocreditDto: UpdateMicrocreditDto) {
    return this.microcreditService.update(+id, updateMicrocreditDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.microcreditService.remove(+id);
  }
}
