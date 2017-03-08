#Introduction#
These instructions will guide throught the process of setting up environment, building, deploying and running a Hello World application using Sencha Ext JS that consumes a JAX-RS Rest Web Service.

#Prerequisites#
- Windows Operating System (7/8/10)
- JDK 1.8.0
- Apache Maven 3.3.9
- Red Hat JBoss EAP 7.0
- Sencha Ext JS 7.2.1

#Install#

##JDK##

###Step 1 Download JDK###

1. Goto Java SE download site @ http://www.oracle.com/technetwork/java/javase/downloads/index.html.
2.  Under "Java Platform, Standard Edition" ⇒ "Java SE 8u{xx}", where {xx} is the latest update number ⇒ Click the "JDK Download" button.
3. Look for the latest "Java SE Development Kit 8u{xx}" ⇒ Check "Accept License Agreement".
4. Choose the JDK for your operating system, e.g., "Windows x64" (for 64-bit Windows OS) or "Windows x86" (for 32-bit Windows OS). You can check whether your Windows OS is 32-bit or 64-bit via "Control Panel" ⇒ (Optional) System and Security ⇒ System ⇒ Under "System Type".

###Step 2 Install JDK and JRE###

1. Run the downloaded installer (e.g., "jdk-8u{xx}-windows-x64.exe"), which installs both the JDK and JRE. By default, the JDK will be installed in directory "C:\Program Files\Java\jdk1.8.0_xx", where xx denotes the upgrade number; and JRE in "C:\Program Files\Java\jre1.8.0_xx".
2. Accept the defaults and follow the screen instructions to install JDK and JRE.

###Step 3 Include JDK's "bin" Directory in the PATH###

To edit the PATH environment variable in Windows 7/8/10:

1. Launch "Control Panel" ⇒ (Optional) System and Security ⇒ System ⇒ Click "Advanced system settings" on the left pane.
2. Switch to "Advanced" tab ⇒ Push "Environment Variables" button.
3. Under "System Variables" (the bottom pane), scroll down to select "Path" ⇒ Click "Edit...".

####For Windows 10 (newer releases)####
You shall see a TABLE listing all the existing PATH entries (if not, goto next step). Click "New" ⇒ Enter the JDK's binary directory "c:\Program Files\Java\jdk1.8.0_xx\bin" (Replace xx with your installation number!!!) ⇒ Select "Move Up" to move this entry all the way to the TOP.
    
####Prior to Windows 10####
In "Variable value" field, INSERT "c:\Program Files\Java\jdk1.8.0_xx\bin" (Replace xx with your installation number) IN FRONT of all the existing directories, followed by a semi-colon (;) which separates the JDK's binary directory from the rest of the existing directories. DO NOT DELETE any existing entries; otherwise, some existing applications may not run. 
    
###Step 4 Verify the JDK Installation###

1. Launch a CMD shell and issue the following commands to verify that JDK/JRE are properly installed and display their version.
```bash
// Display the JRE version
prompt> java -version
 
// Display the JDK version
prompt> javac -version
```

##Apache Maven##

###Step 1 Download Apache Maven Archive###
1. Go to Apache Maven Download site @ http://maven.apache.org/download.cgi and download the zip package.

###Step 2 Extract Apache Maven Archive###

1. Extract distribution archive in any directory by using your preferred archive extraction tool, or use a CMD Shell.

```bash
prompt> unzip apache-maven-3.3.9-bin.zip
```

###Step 3 Include Apache Maven's "bin" Directory in the PATH###

1. Follow the same instructions for adding JDK's "bin" directory.

###Step 4 Verify the Apache Maven Installation###
1. Launch a CMD shell and issue the following commands to verify that Apache Maven are properly installed and display their version.

```bash
prompt> mvn -v
```

##Red Hat JBoss EAP##

###Step 1 Set up development environment###

1. Download JBoss Developer Studio 10.3.0.GA with JBoss EAP @ https://developers.redhat.com/download-manager/file/devstudio-10.3.0.GA-installer-eap.jar.

2. Run the JBoss Developer Studio installer.

    2.1 Navigate to the folder that contains the downloadeded JBoss Developer Studio JAR file.

    2.2 Right-click devstudio-10.3.0.GA-installer-eap.jar

    2.3 Select Open With → Jar Launcher.

3. Follow the on-screen instructions to continue the installation process.

4. Start JBoss Developer Studio.

5. Configure Maven:

    5.1 In JBoss Developer Studio, click Window→Preferences.

    5.2 Type maven in the text box to view options related to Maven.

    5.3In the results, expand JBoss Tools and click JBoss Maven Integration.

    5.4 Click Configure Maven Repositories.

    5.5 Click Add Repository and then click the downward facing arrow in the Profile ID: field to view the available Maven repositories.

    5.6 Select redhat-ga-repository from the drop-down list profile and then click OK.
    
6. Click Finish.

7. Answer Yes when asked about updating the settings.xml file.

###Step 2 Clone the Git repository###

1. Ensure that you have forked the repository online. This option is available in the repository host’s website.

2. Click the Clone a Git Repository and add the clone to this view button.

3. Enter the details of the source repository as follows

    3.1 Add the URI for the repository’s online source. This automatically populates the Host and Repository Path fields.
        
    3.2 Add your username and password for the source repository under the Authentication details.

    3.3 Click Next to continue.

    3.4 Customize the local version of your Git repository as follows:
    
    - Confirm that the automatically populated information for the destination Directory and Initial Branch are             correctly populated.
        
    - Optionally, set a non-default name for the Remote name field.

    - Optionally, select the Add project to working sets option and use the drop down menu and the Select button to select the appropriate working sets for this repository.

    - Click Finish to conclude cloning an existing Git repository. 

###Step 3 Build, Deploy and Run###

1. In the Servers tab, select Red Hat JBoss EAP 7.0 [Stopped] and click the Start the Server icon to start the JBoss EAP server.

2. Once the server starts, right-click the jboss-helloworld-rs application in the Project Explorer view.

    2.1 From the menu that appears, select Run as.. and then Run on Server.

    2.2 Select the newly created JBoss EAP server, click OK and then Finish.

This will **build, deploy, and run** the application in the JBoss EAP server. The application opens in the internal default JBoss Developer Studio web browser and presents the "Hello World!" Success page.

#Useful Resources#

##Apache Maven##

Official website : https://maven.apache.org/

##Red Hat JBoss EAP##

Official website : https://developers.redhat.com/products/eap/overview/

##Sencha Ext JS##

Official website : http://docs.sencha.com/extjs/6.2.0/

#Project's Maven Dependecies#

##CDI API 1.2##
APIs for CDI (Contexts and Dependency Injection for Java EE)

##javax.inject API 1.0##
The javax.inject API

##Common Annotations API 1.2##
Common Annotations for the Java(TM) Platform

##JAX-RS API 2.0##
The Java(TM) API for RESTful Web Services

#Project's Maven Plugins#

##Maven War Plugin##
collecting all artifact dependencies, classes and resources of the web application and packaging them into a web application archive.

#Issues#

##Issue 1##

The JAX-WS web service use a simple POJO to implement the service layer. Replacing in it with a Stateless EJB Cause a NullPointerException. Any help is welcome. 

Thanks for reading !
