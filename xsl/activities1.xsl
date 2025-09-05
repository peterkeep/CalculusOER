<?xml version="1.0" encoding="UTF-8" ?>

<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:fo="http://www.w3.org/1999/XSL/Format" version="1.0">

<!-- Next paths assume current file has been copied to mathbook/user -->
<xsl:import href="./core/pretext-latex.xsl" />

<xsl:output method="text" />

<!-- This makes sure we can match reference numbers to things not included -->

<xsl:template match="*" mode="ref-id">
    <xsl:apply-templates select="." mode="number" />
</xsl:template>

<xsl:template match="*" mode="xref-number">
  <xsl:apply-templates select="." mode="number" />
</xsl:template>


<!-- We pull activities from each introduction -->
<!-- We want to leave the introductions to activities, so we're skipping over them -->
<xsl:template match="introduction[not(parent::activity)]">
    <xsl:apply-templates select="activity"/>
</xsl:template>

<!-- We pull activities from each subsection -->
<xsl:template match="subsection">
    <xsl:apply-templates select="activity"/>    
    <!-- <xsl:text>\cleardoublepage&#xA;&#xA;</xsl:text>  -->
</xsl:template>

<!-- style of the activity boxes -->

<xsl:template match="activity" mode="tcb-style">
    <xsl:text>
        fonttitle=\large,
        colbacktitle=black!20, 
        colback=white, 
        coltitle=black, 
        colframe=black,
        leftrule=2mm,
        rightrule=0mm,
        titlerule=0mm,
        toprule=0mm,
        bottomrule=0mm,
        sharpish corners,
        after={\clearpage}
    </xsl:text>
</xsl:template>



<!-- <xsl:template match="activity">
    <xsl:copy-of select="."/>
    <xsl:text>\newpage&#xA;&#xA;</xsl:text> 
</xsl:template> -->


<!-- <xsl:template match="introduction">
     <xsl:if test="
        parent::section
        ">
    </xsl:if>
</xsl:template> -->
<xsl:template match="conclusion[not(parent::activity)]"/>
<xsl:template match="acknowledgement"/>
<xsl:template match="fact"/>
<xsl:template match="objectives" />
<!--Exercise groups are not in a subsection, so drop them -->
<xsl:template match="exercises" />
<!--Drop all the preface-->
<xsl:template match="preface" />
<!--Drop back matter stuff -->
<xsl:template match="backmatter"/>
<xsl:template match="index" />

<!-- Use letter paper and leave one-inch margins all around -->
<xsl:param name="latex.geometry" select="'letterpaper,margin=1in'" />


<!-- Skip DC2 chapters -->

<xsl:template match="id('ch-ApplicationsIntegrals')"/>
<xsl:template match="id('ch-AntidifferentiationTechniques')"/>
<xsl:template match="id('ch-InfiniteSeries')"/>
<xsl:template match="id('ch-PowerSeries')"/>

<!-- Skip DC2 Appendices -->


</xsl:stylesheet>