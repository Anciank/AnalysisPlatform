# 发送文件
“localhost:8080/databaseFile"

发送文件与databaseID(string), 通过formData
```java
//gpt是这样解析的
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
public class FileUploadController {

    @PostMapping("/databaseFile")
    public ResponseEntity<String> handleFileUpload(
            @RequestParam("file") MultipartFile file,
            @RequestParam("databaseId") String databaseId) {

        // Here, you can access the file using the 'file' parameter
        // You can also access the 'databaseId' parameter

        try {
            // Perform any necessary processing with the file and databaseId
            // For example, save the file to the server or update the database entry

            // Return a success response
            return ResponseEntity.ok("File uploaded successfully");
        } catch (Exception e) {
            e.printStackTrace();
            // Return an error response
            return ResponseEntity.status(500).body("File upload failed");
        }
    }
}

```

# 发送code

“localhost:8080/code"

发送code和databaseID和cellID

