package com.devjourney.backend_devjourney.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.devjourney.backend_devjourney.model.Project;
import com.devjourney.backend_devjourney.repository.ProjectRepository;

@Service
public class ProjectService {
	
	@Autowired
	private ProjectRepository projectRepository;
	
	public List<Project> getAllProjects(){
		return projectRepository.findAll();
	}
	
	public Project getProjectById(Long id) {
		return projectRepository.findById(id).orElseThrow(() -> new RuntimeException("Projeto não encontrado!"));
	}
	
	public Project createProject(Project project) {
		return projectRepository.save(project);
	}
	
	public Project updateProject(Long id, Project projectDetails) {
		Project project = getProjectById(id);
		project.setTitle(projectDetails.getTitle());
		project.setDescription(projectDetails.getDescription());
		project.setGithub_url(projectDetails.getGithub_url());
		return projectRepository.save(project);
	}
	
	public void deleteProject(Long id) {
		projectRepository.deleteById(id);
	}
	
	public List<Project> getProjectByUsername(Long id){
		return projectRepository.findByUserId(id);
	}
}
