import { beforeEach, describe, jest, test, expect } from '@jest/globals';
import { ResumeRepository } from '../../../src/repositories/resumes.repositories.js';
// TODO: template 이라고 되어 있는 부분을 다 올바르게 수정한 후 사용해야 합니다.

const mockPrisma = {
  resume: {
    create: jest.fn(),
    findMany: jest.fn(),
    findUnique: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  },
};

const resumeRepository = new ResumeRepository(mockPrisma);


describe('TemplateRepository Unit Test', () => {
  beforeEach(() => {
    jest.resetAllMocks(); // 모든 Mock을 초기화합니다
  });

  test('createResume', async () => {

     const mockReturn = { data: 'create Return String' };
     mockPrisma.resume.create.mockReturnValue(mockReturn);
 

     const createResumeParams = {
       authorId: 123,
       title: 'createResumeTitle',
       content: 'createResumeContent',
     };
 
     const createResumeData = await resumeRepository.createResume(
        createResumeParams.authorId,
        createResumeParams.title,
        createResumeParams.content,
     );
 
     expect(createResumeData).toEqual(mockReturn);
 
     expect(mockPrisma.resume.create).toHaveBeenCalledTimes(1);
 
     expect(mockPrisma.resume.create).toHaveBeenCalledWith({
       data: {
        authorId:createResumeParams.authorId,
        title:createResumeParams.title,
        content:createResumeParams.content,},
     });
    
  });

  test('getResumes', async () => {
    const mockReturn ='findMany String';
    mockPrisma.resume.findMany.mockReturnValue(mockReturn);

    const resume = await resumeRepository.getResumes();

    expect(resume).toBe(mockReturn);

    expect(resumeRepository.prisma.resume.findMany).toHaveBeenCalledTimes(1);
 
  });

  test('resumeDetail', async () => {
    const mockReturn ='findUnique String';
    mockPrisma.resume.findUnique.mockReturnValue(mockReturn);

    const resume = await resumeRepository.resumeDetail();

    expect(resume).toBe(mockReturn);

    expect(resumeRepository.prisma.resume.findUnique).toHaveBeenCalledTimes(1);
  });

  test('updateResume', async () => {
    const mockReturn = { data: 'update Return String' };
     mockPrisma.resume.update.mockReturnValue(mockReturn);
 

     const updateResumeParams = {
       title: 'updateResumeTitle',
       content: 'updateResumeContent',
     };
 
     const updateResumeData = await resumeRepository.updateResume(
        updateResumeParams.title,
        updateResumeParams.content,
     );
 
     expect(updateResumeData).toEqual(mockReturn);
 
     expect(mockPrisma.resume.update).toHaveBeenCalledTimes(1);
 
     expect(mockPrisma.resume.update).toHaveBeenCalledWith({
       data: {
        title:updateResumeParams.title,
        content:updateResumeParams.content,
        content: undefined,
        title: undefined,
       },
       where:  {
         authorId: NaN,
         id: NaN,
        },
    });
  });

  test('deleteResume', async () => {
    const mockReturn ='delete String';
    mockPrisma.resume.delete.mockReturnValue(mockReturn);

    const resume = await resumeRepository.deleteResume();

    expect(resume).toBe(mockReturn);

    expect(resumeRepository.prisma.resume.delete).toHaveBeenCalledTimes(1);
  });
});
