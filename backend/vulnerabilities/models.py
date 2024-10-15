# vulnerabilities/models.py

from django.db import models


class Vulnerability(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    code_example = models.TextField()
    fix = models.TextField()
    difficulty = models.CharField(max_length=50)
    is_exploited = models.BooleanField(default=False)

    def __str__(self):
        return self.title
