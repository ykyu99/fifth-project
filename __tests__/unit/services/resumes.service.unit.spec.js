import { jest, describe, test, expect, beforeEach } from '@jest/globals';
import { ResumeService } from '../../../src/services/resumes.services.js';

const mockTemplateRepository = {
  createResume: jest.fn(),
  getResumes: jest.fn(),
  resumeDetail: jest.fn(),
  updateResume: jest.fn(),
  deleteResume: jest.fn(),
};

const resumeService = new ResumeService(mockTemplateRepository);

describe('TemplateService Unit Test', () => {
  beforeEach(() => {
    jest.resetAllMocks(); // 모든 Mock을 초기화합니다.
  });

  test('createResume', async () => {
  const mockReturn = {
	data: {
		id: 3,
		authorId: 11,
		title: "지원하는부분",
		content: "할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분",
		status: "APPLY",
		createdAt: "2024-06-13T14:51:58.772Z",
		updatedAt: "2024-06-13T14:51:58.772Z"
	}
};
  mockTemplateRepository.createResume.mockReturnValue(mockReturn);

  const createResumeParams = {
    authorId: 123,
    title: 'createPostTitle',
    content: 'createPostContent',
  };

  const createResumeData = await resumeService.createResume(
    createResumeParams.authorId,
    createResumeParams.title,
    createResumeParams.content,
  );

  expect(createResumeData).toEqual(mockReturn);

  expect(mockTemplateRepository.createResume).toHaveBeenCalledTimes(1);

  expect(mockTemplateRepository.createResume).toHaveBeenCalledWith(
    createResumeParams.authorId,
    createResumeParams.title,
    createResumeParams.content);
});

  test('getResumes', async () => {
    const mockReturn =[
        {   id: 3,
            authorId: 11,
            title: "지원하는부분",
            content: "할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분",
            status: "APPLY",
            createdAt: "2024-06-13T14:51:58.772Z",
            updatedAt: "2024-06-13T14:51:58.772Z" },
        {   id: 4,
            authorId: 11,
            title: "지원하는부분",
            content: "할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분",
            status: "APPLY",
            createdAt: "2024-06-13T14:51:58.772Z",
            updatedAt: "2024-06-13T14:51:58.772Z" },
      ];
      
    mockTemplateRepository.getResumes.mockReturnValue(mockReturn);

    const resume = await resumeService.getResumes();

    expect(resume).toEqual(mockReturn);

    expect(mockTemplateRepository.getResumes).toHaveBeenCalledTimes(1);
  });


  test('resumeDetail', async () => {
    const mockReturn =
        {   id: 4,
            authorId: 11,
            title: "지원하는부분",
            content: "할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분",
            status: "APPLY",
            createdAt: "2024-06-13T14:51:58.772Z",
            updatedAt: "2024-06-13T14:51:58.772Z" 
        };
      
    mockTemplateRepository.resumeDetail.mockReturnValue(mockReturn);

    const resume = await resumeService.resumeDetail();

    expect(resume).toEqual(mockReturn);

    expect(mockTemplateRepository.resumeDetail).toHaveBeenCalledTimes(1);
  });

  test('resumeDetail Method - 이력서 없는 경우', async () => {
    const mockReturn ={};
      
    mockTemplateRepository.resumeDetail.mockReturnValue(mockReturn);

    const resume = await resumeService.resumeDetail();

    expect(resume).toEqual(mockReturn);

    expect(mockTemplateRepository.resumeDetail).toHaveBeenCalledTimes(1);
  });

  test('updateResume Method', async () => {
    const mockReturn = {
        data: {
            id: 3,
            authorId: 11,
            title: "지원하는부분",
            content: "할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분",
            status: "APPLY",
            createdAt: "2024-06-13T14:51:58.772Z",
            updatedAt: "2024-06-13T14:51:58.772Z"
        }
    };
      mockTemplateRepository.updateResume.mockReturnValue(mockReturn);
    
      const resumeParams = {
        userId: 1,
        authorId: 123,
        title: 'createPostTitle',
        content: 'createPostContent',
      };
    
      const resumeData = await resumeService.updateResume(
        resumeParams.userId,
        resumeParams.authorId,
        resumeParams.title,
        resumeParams.content,
      );
    
      expect(resumeData).toEqual(mockReturn);
    
      expect(mockTemplateRepository.updateResume).toHaveBeenCalledTimes(1);
    
      expect(mockTemplateRepository.updateResume).toHaveBeenCalledWith(
        resumeParams.userId,
        resumeParams.authorId,
        resumeParams.title,
        resumeParams.content);
  });

  test('deleteResume Method', async () => {
    const mockReturn = {
        data: {
            id: 3,
            authorId: 11,
            title: "지원하는부분",
            content: "할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분할말이 꽤나 부족한 부분",
            status: "APPLY",
            createdAt: "2024-06-13T14:51:58.772Z",
            updatedAt: "2024-06-13T14:51:58.772Z"
        }
    };
      mockTemplateRepository.deleteResume.mockReturnValue(mockReturn);
    
    
      const resumeParams = {
        userId: 1,
        authorId: 123,
      };
    
      const resumeData = await resumeService.deleteResume(
        resumeParams.userId,
        resumeParams.authorId,
      );
    
      expect(resumeData).toEqual(mockReturn);
    
      expect(mockTemplateRepository.deleteResume).toHaveBeenCalledTimes(1);
      
      expect(mockTemplateRepository.deleteResume).toHaveBeenCalledWith(
        resumeParams.userId,
        resumeParams.authorId,
    );
  });
});
