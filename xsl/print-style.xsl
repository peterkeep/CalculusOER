<?xml version="1.0"?>
<xsl:stylesheet 
version="1.0"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:import href="./core/pretext-latex.xsl"/>

<xsl:template match="section">
    <xsl:apply-imports />
    <xsl:text>\cleardoublepage&#xA;&#xA;</xsl:text>
</xsl:template>

<xsl:template match="activity" mode="tcb-style">
    <xsl:text>
        fonttitle=\bfseries,
        colbacktitle=DClightgreen!80, 
        coltitle=black, 
        leftrule=0.5mm,
        rightrule=0mm,
        titlerule=0mm,
        toprule=0.5mm,
        bottomrule=0.5mm,
        sharpish corners,
        colframe=DClightgreen, 
        colback=white,
        enhanced ,
        breakable
    </xsl:text>
</xsl:template>

<xsl:template match="exploration" mode="tcb-style">
    <xsl:text>
        fonttitle=\bfseries,
        colbacktitle=DClightgreen!80, 
        coltitle=black, 
        leftrule=0.5mm,
        rightrule=0mm,
        titlerule=0mm,
        toprule=0.5mm,
        bottomrule=0.5mm,
        sharpish corners,
        colframe=DClightgreen, 
        colback=white,
        enhanced ,
        breakable
    </xsl:text>
</xsl:template>

<xsl:template match="example" mode="tcb-style">
    <xsl:text>
        fonttitle=\bfseries,
        colbacktitle=DCgreen,
        coltitle=white, 
        leftrule=0.5mm,
        rightrule=0mm,
        titlerule=0mm,
        toprule=0mm,
        bottomrule=0.5mm,
        sharpish corners,
        colframe=DCgreen, 
        colback=white,
        enhanced ,
        breakable
    </xsl:text>
</xsl:template>

<xsl:template match="assemblage" mode="tcb-style">
    <xsl:text>
        fonttitle= \bfseries,
        colbacktitle=DCgreenish, 
        coltitle=white, 
        leftrule=0.5mm,
        rightrule=0.5mm,
        titlerule=0.5mm,
        toprule=0.5mm,
        bottomrule=0.5mm,
        sharpish corners,
        colframe=DCgreenish, 
        colback=DCgreenish!10,
        enhanced ,
        breakable
    </xsl:text>
</xsl:template>

<xsl:template match="theorem" mode="tcb-style">
    <xsl:text>
        fonttitle=\bfseries,
        colbacktitle=DCblue, 
        coltitle=white, 
        leftrule=0.5mm,
        rightrule=0.5mm,
        titlerule=0.5mm,
        toprule=0.5mm,
        bottomrule=0.5mm,
        sharpish corners,
        colframe=DCblue, 
        colback=DCblue!10,
        enhanced ,
        breakable
    </xsl:text>
</xsl:template>

<xsl:template match="fact" mode="tcb-style">
    <xsl:text>
        fonttitle=\bfseries,
        colbacktitle=DCblue, 
        coltitle=white, 
        leftrule=0.5mm,
        rightrule=0.5mm,
        titlerule=0.5mm,
        toprule=0.5mm,
        bottomrule=0.5mm,
        sharpish corners,
        colframe=DCblue, 
        colback=DCblue!10,
        enhanced ,
        breakable
    </xsl:text>
</xsl:template>

<xsl:template match="definition" mode="tcb-style">
    <xsl:text>
        fonttitle=\bfseries,
        colbacktitle=DCblue, 
        coltitle=white, 
        leftrule=0.5mm,
        rightrule=0.5mm,
        titlerule=0.5mm,
        toprule=0.5mm,
        bottomrule=0.5mm,
        sharpish corners,
        colframe=DCblue, 
        colback=DCblue!10,
        enhanced ,
        breakable
    </xsl:text>
</xsl:template>

<xsl:template match="note" mode="tcb-style">
    <xsl:text>
        fonttitle=\bfseries,
        sharpish corners,
        colframe=DCred,
        colback=DCred!10,
        colbacktitle=DCred!10, 
        coltitle=black, 
        leftrule=1.5mm,
        rightrule=0mm,
        titlerule=0mm,
        toprule=0mm,
        bottomrule=0mm,
        sharpish corners,
        enhanced ,
        breakable
    </xsl:text>
</xsl:template>

<xsl:template match="aside" mode="tcb-style">
    <xsl:text>
        sharpish corners,
        fonttitle=\bfseries\footnotesize,
        colframe=DCyellow,
        title={Aside.},
        colback=DCyellow!10,
        colbacktitle=DCyellow!10, 
        coltitle=black, 
        leftrule=1.5mm,
        rightrule=0mm,
        titlerule=0mm,
        toprule=0mm,
        bottomrule=0mm,
        sharpish corners,
        fontupper=\footnotesize,
        enhanced,
        breakable
    </xsl:text>
</xsl:template>



<xsl:template match="proof" mode="tcb-style">
    <xsl:text>
        fonttitle=\bfseries,
        sharpish corners,
        colframe=black!10,
        colback=white,
        colbacktitle=white, 
        coltitle=black, 
        leftrule=0.5mm,
        rightrule=0mm,
        titlerule=0mm,
        toprule=0mm,
        bottomrule=0.5mm,
        fontupper=\footnotesize,
        enhanced ,
        breakable
    </xsl:text>
</xsl:template>

</xsl:stylesheet>