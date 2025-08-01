<?xml version="1.0" encoding="UTF-8" ?>


<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:fo="http://www.w3.org/1999/XSL/Format" version="1.0">

<!-- Next paths assume current file has been copied to mathbook/user -->
<xsl:import href="./core/pretext-latex.xsl" />

<xsl:output method="text" />


<!-- We pull activities from each introduction -->
<xsl:template match="introduction[not(parent::activity)]">
    <xsl:apply-templates select="activity"/>
</xsl:template>

<!-- We pull activities from each subsection -->
<xsl:template match="subsection">
    <!--Pull in activities as well as other numbered things-->
    <!--<xsl:apply-templates select="activity|fact|definition|note|remark|observation"/>-->
    <xsl:apply-templates select="activity"/>
    <!-- <xsl:text>\cleardoublepage&#xA;&#xA;</xsl:text> -->
</xsl:template>

<xsl:template match="activity" mode="tcb-style">
    <xsl:text>colframe=DClightgreen, colback=white, coltitle=black</xsl:text>
</xsl:template>


<!-- <xsl:template match="introduction">
     <xsl:if test="
        parent::section
        ">
    </xsl:if>
</xsl:template> -->
<xsl:template match="conclusion[not(parent::activity)]"/>
<xsl:template match="fact"/>
<xsl:template match="objectives" />
<!--Exercise groups are not in a subsection, so drop them -->
<xsl:template match="exercises" />
<!--Drop all the preface-->
<xsl:template match="preface" />
<!--Drop back matter stuff -->
<xsl:template match="appendix"/>
<xsl:template match="index" />

<!-- Use letter paper and leave one-inch margins all around -->
<xsl:param name="latex.geometry" select="'letterpaper,margin=1in'" />





</xsl:stylesheet>