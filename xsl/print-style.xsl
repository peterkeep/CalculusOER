<?xml version="1.0"?>
<xsl:stylesheet 
version="1.0"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:import href="./core/pretext-latex.xsl"/>

<xsl:template match="example" mode="tcb-style">
    <xsl:text>colframe=DCgreen, colback=white,</xsl:text>
</xsl:template>

<xsl:template match="assemblage" mode="tcb-style">
    <xsl:text>colframe=DCblue, colback=white,</xsl:text>
</xsl:template>

<xsl:template match="theorem" mode="tcb-style">
    <xsl:text>colframe=DCblue, colback=white,</xsl:text>
</xsl:template>

<xsl:template match="definition" mode="tcb-style">
    <xsl:text>colframe=DCblue, colback=white,</xsl:text>
</xsl:template>

<xsl:template match="note" mode="tcb-style">
    <xsl:text>colframe=DCred, colback=white,</xsl:text>
</xsl:template>

<xsl:template match="aside" mode="tcb-style">
    <xsl:text>colframe=DCyellow, colback=white</xsl:text>
</xsl:template>

<xsl:template match="activity" mode="tcb-style">
    <xsl:text>colframe=DClightgreen, colback=white, coltitle=black</xsl:text>
</xsl:template>

</xsl:stylesheet>