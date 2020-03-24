<?xml version="1.0" encoding="UTF-8" ?>
<!--
   New Perspectives on XML, 3rd Edition
   Tutorial 7
   Case Problem 1

   Harris and Barnes Style Sheet
   Author: Terri Lyman 
   Date:   March 23, 2010

   Filename:         hbemployees.xsl
   Supporting Files: 
-->


<xsl:stylesheet version="1.0"
     xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
   
   <xsl:key name="departments" match="employee" use="department"/>

   <xsl:output method="html"
      doctype-system="about:legacy-compat"
      encoding="UTF-8"
      indent="yes" />


   <xsl:template match="/">
      <html>
         <head>
            <title>Employee Report</title>
            <link href="hbstyles.css" rel="stylesheet" type="text/css" />
         </head>

         <body>
            <div id="wrap">
               <header>
                  <img src="hblogo.png" alt="Harris and Barnes" />
               </header>

               <h1>Employee Report</h1>
               <xsl:for-each select="//employee[generate-id()=generate-id(key('departments', department)[1])]">
                  <xsl:sort select="department"/>
                  
                  <xsl:apply-templates select="key('departments', department)">
                     <xsl:sort select="salary" order="descending"/>
                  </xsl:apply-templates> 
                  
               </xsl:for-each>
               
               <table class="employeeList">
                  <caption><xsl:value-of select="department"/></caption>
                  <thead>
                     <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Salary</th>
                        <th>Phone</th>
                        <th>Gender</th>
                        <th>Marital Status</th>
                        <th>Work Status</th>
                     </tr>
                  </thead>
                  <tbody>
                                     
                  </tbody>
               </table>
               
             </div>
         </body>

      </html>
   </xsl:template>
   
   <xsl:template match="employee">
      <tr>
         <td><xsl:value-of select="name"/></td>
         <td><xsl:value-of select="position"/></td>
         <td><xsl:value-of select="format-number(salary, '$#,#0.00')"/></td>
         <td><xsl:value-of select="phone"/></td>
         <td><xsl:value-of select="gender"/></td>
         <td><xsl:value-of select="maritalStatus"/></td>
         <td><xsl:value-of select="workingStatus"/></td>
      </tr>
   </xsl:template>

</xsl:stylesheet>

