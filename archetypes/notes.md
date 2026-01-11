---
title: "{{ replace .File.ContentBaseName "-" " " | title }}"
date: "{{ .Date }}"
draft: true
tags: ["tag"]
slug: "{{ now.Format "200601021504" }}"
---
