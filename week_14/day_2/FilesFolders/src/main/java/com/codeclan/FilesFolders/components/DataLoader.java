package com.codeclan.FilesFolders.components;


import com.codeclan.FilesFolders.models.File;
import com.codeclan.FilesFolders.models.Folder;
import com.codeclan.FilesFolders.models.User;
import com.codeclan.FilesFolders.repositories.FileRepository;
import com.codeclan.FilesFolders.repositories.FolderRepository;
import com.codeclan.FilesFolders.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {
    @Autowired
    FileRepository fileRepository;

    @Autowired
    FolderRepository folderRepository;

    @Autowired
    UserRepository userRepository;

    public DataLoader() {}

    public void run(ApplicationArguments args) {

        User bob = new User("Bob");
        userRepository.save(bob);

        User tommy = new User("Tommy");
        userRepository.save(tommy);

        User henry = new User("Henry");
        userRepository.save(henry);

        Folder workData = new Folder("Work_Data", bob);
        folderRepository.save(workData);
        Folder personalFiles = new Folder("Personal_Files", bob);
        folderRepository.save(personalFiles);

        Folder workData2 = new Folder("Work_Data2", tommy);
        folderRepository.save(workData2);

        Folder business = new Folder("Business_Data", henry);
        folderRepository.save(business);

        // bob folder
        File work1 = new File("Pirates", ".nfo", 5, workData);
        fileRepository.save(work1);

        File work2 = new File("Relationships", ".des", 7, workData);
        fileRepository.save(work2);

        File personalDetails = new File("Card_details", ".des", 4, personalFiles);
        fileRepository.save(personalDetails);

        // tommy folder
        File workSchedule1 = new File("Timetable", ".fes", 11, workData2);
        fileRepository.save(workSchedule1);

        // henry folder
        File carExpenses = new File("Car_Expenses", ".xls", 6, business);
        fileRepository.save(carExpenses);
    }

}
