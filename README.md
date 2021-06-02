# crowd_computing_group_10
In this repository group 10 will implement our project for the Crowd Computing course at the TU Delft.

The folder "Toloka Task Interface" implements the neccessary HTML/CSS/JS files needed to generate all the tasks inside Toloka. These three files can be copy pasted into the "Task Interface" of an empty project to recreate the project.

Data Specification:
Input data:
    - group (type: integer, required: yes)
    - isTask (type: boolean, required: yes)
    - first_name (type: string, required: no)
    - prefession (type: string, required: no)

Output data:
    - answer (type: string, required: yes)
    - daily_use (type: string, required: no)
    - q1 (type: integer, required: no, allowed values: 1, 2, 3, 4, 5, 6, 7)
    - q2 (type: integer, required: no, allowed values: 1, 2, 3, 4, 5, 6, 7)
    - q3 (type: integer, required: no, allowed values: 1, 2, 3, 4, 5, 6, 7)
    - q4 (type: integer, required: no, allowed values: 1, 2, 3, 4, 5, 6, 7)
    - q5 (type: integer, required: no, allowed values: 1, 2, 3, 4, 5, 6, 7)
    - q6 (type: integer, required: no, allowed values: 1, 2, 3, 4, 5, 6, 7)
    - sentiment (type: integer, required: no, allowed values: 1, 2, 3, 4, 5, 6, 7)


Task TSV files for the different pools can be found under the folder "Tasks".

    - SampleTask1 - group 1 (No avatar)
    - SampleTask2 - group 2 (Basic Avatar (background, skin, long/short hair))
    - SampleTask3 - group 3 (All avatar customization at start)
    - SampleTask4 - group 4 (All avatar customizations distributed every 5 tasks)
