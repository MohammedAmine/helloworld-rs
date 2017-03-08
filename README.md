#Introduction#
// TODO

#Prerequisites#
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
####Prior to Windows####
    In "Variable value" field, INSERT "c:\Program Files\Java\jdk1.8.0_xx\bin" (Replace xx with your installation number) IN FRONT of all the existing directories, followed by a semi-colon (;) which separates the JDK's binary directory from the rest of the existing directories. DO NOT DELETE any existing entries; otherwise, some existing applications may not run. 
    
###Step 4 Verify the JDK Installation###

Launch a CMD shell and issue the following commands to verify that JDK/JRE are properly installed and display their version.
```bash
// Display the JRE version
prompt> java -version
java version "1.8.0_xx"
Java(TM) SE Runtime Environment (build 1.8.0_xx-b13)
Java HotSpot(TM) 64-Bit Server VM (build 25.5-b02, mixed mode)
 
// Display the JDK version
prompt> javac -version
javac 1.8.0_xx
```

##Apache Maven##
1. // TODO
2. // TODO
3. // TODO

##Red Hat JBoss EAP##
1. // TODO
2. // TODO
3. // TODO

##Sencha Ext JS##
1. // TODO
2. // TODO
3. // TODO

#Useful Resources#

##Apache Maven##
// TODO

##Red Hat JBoss EAP##
// TODO

##JAX-RS##
// TODO

##Sencha Ext JS##
// TODO
